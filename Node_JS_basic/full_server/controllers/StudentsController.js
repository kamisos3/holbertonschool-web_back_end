
import { readDatabase } from '../utils.js';

export default class StudentsController {
    static async getAllStudents(_req, res) {
        const dbFile = process.argv[2];
        try {
            const data = await readDatabase(dbFile);
            const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            let message = 'This is the list of our students';
            for (const field of fields) {
                const list = data[field].join(', ');
                message += `\nNumber of students in ${field}: ${data[field].length}. List: ${list}`;
            }
            res.status(200).send(message);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const dbFile = process.argv[2];
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }
        try {
            const data = await readDatabase(dbFile);
            const list = (data[major] || []).join(', ');
            res.status(200).send(`List: ${list}`);
        } catch (err) {
            res.status(500).send('Cannot load the database');
        }
    }
}
