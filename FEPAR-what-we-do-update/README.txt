FEPAR website update

This source update includes the expanded /what-we-do/ route, the FESTAC and FESTAC Africa chronology on /festac-50/, a sourced cultural history page at /festac-history/, and a theme songs listening room at /theme-songs/. It also updates shared navigation, metadata discovery, and responsive styles.

Apply by copying the contents of this folder into the root of the FEPAR-website project, preserving folder paths and overwriting matching files. Then run npm run build.

The theme songs page is ready for audio, but no song files were present in the project. Add cleared tracks under public/audio/ and register them in app/theme-songs/page.tsx; setup notes are in public/audio/README.txt. Background playback only begins after a visitor chooses it.

The project workspace drive was disconnected during this update, so these files are packaged separately instead of copied into the project checkout.
