const connection = require('../config/db')

const Product = {
    selectAllProduct: cb => {
        const queryString = `SELECT p.*, SUM(do.jumlah) AS total_penjualan
        FROM produk p
        LEFT JOIN detail_order do ON p.id = do.id_produk
        GROUP BY p.id
        ORDER BY SUM(do.jumlah), p.nama`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    selectAllProductByCategory: (categoryId, cb) => {
        let queryString = `SELECT p.*, SUM(do.jumlah) AS total_penjualan
            FROM produk p
            INNER JOIN kategori k
            LEFT JOIN detail_order do ON p.id = do.id_produk
            WHERE k.id = ?
            GROUP BY p.id
            ORDER BY SUM(do.jumlah), p.nama`
        if (categoryId == 0) {
            queryString = `SELECT p.*, SUM(do.jumlah) AS total_penjualan
            FROM produk p
            INNER JOIN detail_order do ON p.id = do.id_produk
            GROUP BY p.id
            ORDER BY SUM(do.jumlah), p.nama`
            connection.query(queryString, (err, result) => {
                if (err) throw err;
                cb(result);
            })
        } else {
            connection.execute(queryString, [categoryId], (err, result) => {
                if (err) throw err;
                cb(result);
            })
        }
    },
    selectProductById: (id, cb) => {
        const queryString = `SELECT *
            FROM produk
            WHERE id = ?`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    insertOne: (vals, cb) => {
        const queryString = `INSERT INTO produk (nama, harga, kategori, diskon, foto) VALUES (?,?,?,?,?)`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    updateOne: (vals, id, cb) => {
        vals.push()
        vals.push(id)
        const queryString = `UPDATE produk
            SET nama=?, harga=?, kategori=?, diskon=?, foto=?, updated_at=CURRENT_TIMESTAMP()
            WHERE id=?;`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteOne: (id, cb) => {
        const queryString = `DELETE FROM produk WHERE id=?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = Product