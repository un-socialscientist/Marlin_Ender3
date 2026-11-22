# Ender-3 Pro V1.5 + BLTouch - Marlin auto builds

Automatic Marlin firmware builds made with [marlin_auto_build](https://github.com/zisismaras/marlin_auto_build).

**Printer:** Creality Ender-3 Pro "V1.5" - Creality V4.2.2 board, STM32F103RET6 chip, stock 12864 display, BLTouch.

## Builds

| File | Description |
|---|---|
| `builds/base.js` | Marlin's official `Ender-3 Pro/CrealityV422` config + bed-tramming menu + OctoPrint host commands. Not built on its own. |
| `builds/features/bltouch.js` | Partial: BLTouch on the dedicated port, probe Z-homing, 5x5-ready bilinear mesh, Probe Offset Wizard, Z-offset babystepping, M48. |
| `builds/ender3pro_bltouch_5x5.js` | **The firmware to flash**: base + BLTouch, 5x5 mesh. Stable Marlin releases only. |

## Wiring
BLTouch in the board's 5-pin BLTouch port. Z endstop switch unplugged.

## Flashing
1. Download the latest `ender_3_pro_v1.5-<version>-bltouch_5x5-<id>.bin` from Releases.
2. Copy it alone onto a FAT32 microSD card (any new filename works; the board ignores a name it has flashed before).
3. Insert the card, power on, wait ~20 s.
4. Send `M502` then `M500` to load the new defaults.
5. Set probe X/Y offsets if your bracket differs: `M851 X.. Y..`, then run the Probe Offset Wizard for Z, then `M500`.
6. Slicer start G-code: `G28` followed by `G29` (or `M420 S1` to reuse a saved mesh).
