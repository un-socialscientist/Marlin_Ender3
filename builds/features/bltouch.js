// Partial: BLTouch / CR Touch on the dedicated 5-pin BLTouch port of the V4.2.2 board.
// Wiring: probe in the BLTouch port, Z endstop switch UNPLUGGED (the probe homes Z).
module.exports = {
    partial: true,
    configuration: {
        enable: [
            "BLTOUCH",
            "USE_PROBE_FOR_Z_HOMING",
            "Z_SAFE_HOMING",                       // home Z with the probe at the bed centre

            // Nozzle-to-probe offset {X, Y, Z} in mm.
            // -44, -6 suits the common left-side bracket; measure yours and change it here
            // (or later with M851 X.. Y.. + M500). Z starts at 0 - set it with the
            // Probe Offset Wizard before the first print.
            ["NOZZLE_TO_PROBE_OFFSET", [-44, -7, 0]],

            // Automatic mesh levelling
            "AUTO_BED_LEVELING_BILINEAR",
            "RESTORE_LEVELING_AFTER_G28",          // keep the mesh active after homing
            "LCD_BED_LEVELING",                    // "Level Bed" menu

            // M48 probe accuracy test
            "Z_MIN_PROBE_REPEATABILITY_TEST"
        ],
        disable: [
            // probe uses its own pin (PB1), not the Z endstop socket
            "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN"
        ]
    },
    configuration_adv: {
        enable: [
            "BABYSTEP_ZPROBE_OFFSET",              // babystepping also adjusts the saved Z offset
            "PROBE_OFFSET_WIZARD"                  // Configuration > Advanced > Probe Offsets > Wizard
        ]
    }
};
