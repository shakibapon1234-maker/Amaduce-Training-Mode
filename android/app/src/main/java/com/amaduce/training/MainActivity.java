package com.amaduce.training;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {

    private static final int REQ_ACTIVATE = 1001;
    private WebView webView;
    private LicenseManager licMgr;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Block screenshots and screen recording (security)
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_SECURE,
            WindowManager.LayoutParams.FLAG_SECURE
        );

        // Full screen
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN
        );
        View decorView = getWindow().getDecorView();
        decorView.setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            | View.SYSTEM_UI_FLAG_FULLSCREEN
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        );

        licMgr = new LicenseManager(this);
        checkLicense();
    }

    private void checkLicense() {
        LicenseManager.LicenseStatus status = licMgr.checkStatus();

        switch (status) {
            case VALID:
                // License OK — load the simulator
                launchSimulator();
                break;

            case NOT_ACTIVATED:
                // First time — show activation screen
                Intent i = new Intent(this, LicenseActivity.class);
                startActivityForResult(i, REQ_ACTIVATE);
                break;

            case EXPIRED:
                showBlockDialog(
                    "License Expired",
                    "Your 2-year license has expired.\n\nKey: " + licMgr.getMaskedKey() +
                    "\n\nPlease contact Amaduce Academy to renew your license.",
                    true
                );
                break;

            case WRONG_DEVICE:
                showBlockDialog(
                    "Wrong Device",
                    "This license key is activated on a different device.\n\n" +
                    "Please contact Amaduce Academy to transfer your license.",
                    true
                );
                break;

            case TAMPERED:
                showBlockDialog(
                    "License Error",
                    "License data has been modified. This app cannot run.\n\n" +
                    "Please reinstall the app and contact Amaduce Academy.",
                    true
                );
                break;

            default:
                showBlockDialog("Activation Required", "Please activate your license to continue.", false);
                break;
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == REQ_ACTIVATE) {
            if (resultCode == RESULT_OK) {
                launchSimulator();
            } else {
                // User cancelled activation — exit
                finish();
            }
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void launchSimulator() {
        webView = new WebView(this);
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setBuiltInZoomControls(false);
        settings.setSupportZoom(false);
        settings.setTextZoom(100);

        webView.setWebViewClient(new WebViewClient());
        webView.setWebChromeClient(new WebChromeClient());
        webView.loadUrl("file:///android_asset/index.html");
    }

    private void showBlockDialog(String title, String message, boolean exitOnDismiss) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle(title);
        builder.setMessage(message);
        builder.setCancelable(false);
        if (exitOnDismiss) {
            builder.setPositiveButton("OK", (d, w) -> finish());
        } else {
            builder.setPositiveButton("Activate", (d, w) -> {
                Intent i = new Intent(this, LicenseActivity.class);
                startActivityForResult(i, REQ_ACTIVATE);
            });
            builder.setNegativeButton("Exit", (d, w) -> finish());
        }
        builder.show();
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK && webView != null && webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (webView != null) webView.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) webView.onResume();
    }

    @Override
    protected void onDestroy() {
        if (webView != null) webView.destroy();
        super.onDestroy();
    }
}
