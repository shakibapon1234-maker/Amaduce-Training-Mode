package com.amaduce.training;

import android.app.Activity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class LicenseActivity extends Activity {

    private LicenseManager licMgr;
    private EditText etKey;
    private Button btnActivate;
    private TextView tvDeviceId, tvError;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Block screenshots and screen recording
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        licMgr = new LicenseManager(this);

        setContentView(R.layout.activity_license);

        etKey      = findViewById(R.id.etLicenseKey);
        btnActivate= findViewById(R.id.btnActivate);
        tvDeviceId = findViewById(R.id.tvDeviceId);
        tvError    = findViewById(R.id.tvError);

        // Show Device ID so user can send to admin if needed
        tvDeviceId.setText("Device ID: " + licMgr.getDeviceId());

        // Auto-format key as user types (add dashes)
        etKey.addTextChangedListener(new TextWatcher() {
            boolean isFormatting = false;
            @Override public void beforeTextChanged(CharSequence s, int st, int c, int a) {}
            @Override public void onTextChanged(CharSequence s, int st, int b, int c) {}
            @Override public void afterTextChanged(Editable s) {
                if (isFormatting) return;
                isFormatting = true;
                String raw = s.toString().replaceAll("[^A-Za-z0-9]", "").toUpperCase();
                StringBuilder formatted = new StringBuilder();
                for (int i = 0; i < raw.length() && i < 15; i++) {
                    if ((i == 3 || i == 7 || i == 11) && formatted.length() > 0) {
                        formatted.append('-');
                    }
                    formatted.append(raw.charAt(i));
                }
                etKey.setText(formatted.toString());
                etKey.setSelection(formatted.length());
                isFormatting = false;
                tvError.setVisibility(View.GONE);
            }
        });

        btnActivate.setOnClickListener(v -> {
            String key = etKey.getText().toString().trim();
            if (key.isEmpty()) {
                showError("Please enter your license key.");
                return;
            }
            if (!licMgr.isKeyValid(key)) {
                showError("Invalid license key. Please check and try again.");
                return;
            }
            boolean ok = licMgr.activate(key);
            if (ok) {
                Toast.makeText(this, "Activated! Expires: " + licMgr.getExpiryDisplay(), Toast.LENGTH_LONG).show();
                setResult(RESULT_OK);
                finish();
            } else {
                showError("Activation failed. Please contact support.");
            }
        });
    }

    private void showError(String msg) {
        tvError.setText(msg);
        tvError.setVisibility(View.VISIBLE);
    }
}
