// Base build: Creality Ender-3 Pro "V1.5"
// - Creality V4.2.2 board, STM32F103RET6 (512K) chip, A4988-type drivers
// - Stock 12864 (CR-10 style) display
// Starts from Marlin's official example config for this exact printer and only
// adds small quality-of-life options. It is not built on its own (active: false);
// the real builds extend it.
module.exports = {
    board_env: "STM32F103RE_creality",   // RET6 chip (use STM32F103RC_creality for an RCT6 chip)
    active: false,                       // note: "active" and "only" are not inherited, set them in each build
    min_version: "2.1.2",
    meta: {
        stable_name: "ender_3_pro_v1.5-{{marlin_version}}-base-{{uid}}",
        nightly_name: "ender_3_pro_v1.5-{{current_date}}-base-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Sourav, Ender-3 Pro V1.5, marlin_auto_build)"],
            // corner-levelling helper menu
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER"
        ],
        disable: []
    },
    configuration_adv: {
        enable: [
            // OctoPrint / host prompts
            "HOST_ACTION_COMMANDS"
        ],
        disable: []
    }
};
