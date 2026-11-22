// Ender-3 Pro V1.5 + BLTouch, 5x5 automatic bed mesh.
// This is the build that produces the firmware you flash.
module.exports = {
    extends: "builds/base.js",
    include: "builds/features/bltouch.js",
    active: true,
    only: "stable",      // remove this line to also get nightly (bugfix-2.1.x development) builds
    meta: {
        stable_name: "ender_3_pro_v1.5-{{marlin_version}}-bltouch_5x5-{{uid}}",
        nightly_name: "ender_3_pro_v1.5-{{current_date}}-bltouch_5x5-{{uid}}"
    },
    configuration: {
        enable: [
            ["CUSTOM_MACHINE_NAME", "Ender-3 Pro BLTouch"],
            ["GRID_MAX_POINTS_X", 5]
        ]
    }
};
