package com.amaduce.training;

import android.content.Context;
import android.content.SharedPreferences;
import android.provider.Settings;
import android.util.Base64;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

/**
 * Amaduce Training Simulator — Offline License Manager
 * Key Format: AMT-XXXX-XXXX-XXXX  |  Validity: 730 days (2 years)
 */
public class LicenseManager {
    private static final String PREFS_NAME    = "amt_lic";
    private static final String KEY_STATUS    = "s";
    private static final String KEY_LICENSE   = "k";
    private static final String KEY_DEVICE    = "d";
    private static final String KEY_ACTIVATED = "a";
    private static final String KEY_EXPIRES   = "e";
    private static final String KEY_HASH      = "h";

    // ⚠️ This secret MUST match the one in generate_license.bat
    static final String MASTER_SECRET = "AMADUCE-GDS-TRAINING-2026-SHAKIB";
    private static final int VALIDITY_DAYS = 730; // 2 years

    public enum LicenseStatus { VALID, NOT_ACTIVATED, EXPIRED, WRONG_DEVICE, TAMPERED, INVALID_KEY }

    private final Context ctx;
    private final SharedPreferences prefs;

    public LicenseManager(Context ctx) {
        this.ctx = ctx;
        this.prefs = ctx.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE);
    }

    public String getDeviceId() {
        String raw = Settings.Secure.getString(ctx.getContentResolver(), Settings.Secure.ANDROID_ID);
        if (raw == null || raw.isEmpty()) raw = "UNKNOWN";
        return sha256(raw).substring(0, 16).toUpperCase();
    }

    public boolean isKeyValid(String licenseKey) {
        if (licenseKey == null) return false;
        String k = licenseKey.trim().toUpperCase();
        if (!k.matches("AMT-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}")) return false;
        String[] p = k.split("-");
        String payload = p[1] + p[2];
        String expected = sha256(MASTER_SECRET + payload).substring(0, 4).toUpperCase();
        return expected.equals(p[3]);
    }

    public boolean activate(String licenseKey) {
        if (!isKeyValid(licenseKey)) return false;
        String dev = getDeviceId();
        String now = new SimpleDateFormat("yyyy-MM-dd", Locale.US).format(new Date());
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DAY_OF_YEAR, VALIDITY_DAYS);
        String exp = new SimpleDateFormat("yyyy-MM-dd", Locale.US).format(cal.getTime());
        SharedPreferences.Editor ed = prefs.edit();
        ed.putString(KEY_STATUS,    "active");
        ed.putString(KEY_LICENSE,   licenseKey.trim().toUpperCase());
        ed.putString(KEY_DEVICE,    dev);
        ed.putString(KEY_ACTIVATED, now);
        ed.putString(KEY_EXPIRES,   exp);
        ed.putString(KEY_HASH,      buildHash(licenseKey.trim().toUpperCase(), dev, now, exp));
        ed.apply();
        return true;
    }

    public LicenseStatus checkStatus() {
        String status = prefs.getString(KEY_STATUS,    null);
        String sKey   = prefs.getString(KEY_LICENSE,   null);
        String sDev   = prefs.getString(KEY_DEVICE,    null);
        String sAct   = prefs.getString(KEY_ACTIVATED, null);
        String sExp   = prefs.getString(KEY_EXPIRES,   null);
        String sHash  = prefs.getString(KEY_HASH,      null);
        if (status == null || sKey == null) return LicenseStatus.NOT_ACTIVATED;
        if (sHash == null || !sHash.equals(buildHash(sKey, sDev, sAct, sExp))) return LicenseStatus.TAMPERED;
        if (!getDeviceId().equals(sDev)) return LicenseStatus.WRONG_DEVICE;
        try {
            Date expDate = new SimpleDateFormat("yyyy-MM-dd", Locale.US).parse(sExp);
            if (expDate != null && new Date().after(expDate)) return LicenseStatus.EXPIRED;
        } catch (Exception e) { return LicenseStatus.TAMPERED; }
        return LicenseStatus.VALID;
    }

    public String getExpiryDisplay() {
        String e = prefs.getString(KEY_EXPIRES, null);
        if (e == null) return "Unknown";
        try {
            Date d = new SimpleDateFormat("yyyy-MM-dd", Locale.US).parse(e);
            return d != null ? new SimpleDateFormat("MMMM d, yyyy", Locale.US).format(d) : e;
        } catch (Exception ex) { return e; }
    }

    public String getMaskedKey() {
        String k = prefs.getString(KEY_LICENSE, null);
        if (k == null) return "";
        String[] p = k.split("-");
        return p.length == 4 ? "AMT-****-****-" + p[3] : "AMT-****-****-****";
    }

    private String buildHash(String k, String d, String a, String e) {
        return sha256(MASTER_SECRET + "|" + k + "|" + d + "|" + a + "|" + e).substring(0, 32);
    }

    static String sha256(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] b = md.digest(input.getBytes(StandardCharsets.UTF_8));
            StringBuilder sb = new StringBuilder();
            for (byte x : b) sb.append(String.format("%02x", x));
            return sb.toString();
        } catch (Exception ex) {
            return Base64.encodeToString(input.getBytes(), Base64.NO_WRAP);
        }
    }
}
