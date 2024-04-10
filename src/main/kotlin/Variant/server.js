const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // 使用するポート番号

// APIエンドポイントでグリッドデータを提供
app.get('/api/grid', (req, res) => {
    const grid = [];
    for (let i = 1; i <= 12; i++) {
        const row = [];
        for (let j = 1; j <= 12; j++) {
            row.push(i * j);
        }
        grid.push(row);
    }
    res.json(grid);
});

// カレントディレクトリの静的ファイルを提供する
app.use(express.static(path.join(__dirname, '../../resources')));

// ルートパスへのリクエストに対する処理を追加
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../resources/index.html'));
});


// サーバーを起動する
app.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で実行されています。`);
});

