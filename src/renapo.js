const { Router } = require("express")
const router = Router();
const mysqlConnection = require("./mysql");

router.get("/consultaGeneral", (req, res) => {
    mysqlConnection.query('SELECT * FROM datos', (error, rows, fields) => {
        if (error) {
            throw error;
        } else {
            res.json(rows);
        }
    });
});
router.get("/consultaDatosCurp/:curp", (req, res) => {
    const { curp } = req.params;
    mysqlConnection.query('SELECT * FROM datos WHERE curp=?', [curp], (error, rows, fields) => {
        if (error) {
            throw error;
        } else {
            res.json(rows);
        }
    });
});
router.post("/insertar", (req, res) => {
    const data = req.body;
    mysqlConnection.query(`INSERT INTO datos set ?`, [data], (error, rows, fields) => {
        if (error) {
            throw error;
        } else {
            res.json({ Estado: "Información Guardada" });
        }
    });
});
router.delete("/borrar/:curp", (req, res) => {
    const { curp } = req.params;
    mysqlConnection.query('DELETE FROM datos WHERE curp= ?', [curp], (error, rows, fields) => {
        if (error) {
            throw error;
        } else {
            res.json({ Estado: "Información Eliminada" });
        }
    });
});

module.exports = router;