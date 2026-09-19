import { renameSync, rmSync, writeFileSync } from 'node:fs';
renameSync('dist/h5/h5.html', 'dist/h5/index.html');
// The standalone H5 needs no device simulator assets; keep them in source for the design preview.
rmSync('dist/h5/assets/iphone', { recursive: true, force: true });
rmSync('dist/h5/assets/android', { recursive: true, force: true });
rmSync('dist/h5/assets/status', { recursive: true, force: true });
writeFileSync('dist/h5/.nojekyll', '');
