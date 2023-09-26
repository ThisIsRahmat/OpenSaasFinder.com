import {google } from 'googleapis';

//gives client to spreadhseet read only scope 
const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

//create credientials so we can pass them into an instanvce of Google Auth later 
const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    target
  );

const sheets = google.sheets({ version: 'v4', auth: jwt });


const getSheetData = async (saasQuery: string, send) => {

    sheets.spreadsheets.values.get(
        {
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A36:E36'
        }, 
        (err, res) => {
            if (err) return console.log("The API returned an error:" + err);
            const rows = res.data.values;
            if (rows.length){
                const sheetData = rows.map((row) => {
                    return {
                        name: row[0],
                        url: row[1],
                        description: row[2],
                        github: row[3],
                    };
                });
                send,status(200).json({ data: sheetData});

            } else {
                send.status(400).json({data: "No saas found"})
            }
        }
    )


    
}

export default function handler(req, res){
    const method = req.method;

    switch(method) {
        case "GET":
            try {
                getSheetData(req.query.name, res);
            } catch(error) {
                res.status(400).send("Error.");
                        } break;
                        default:
                            res.setHeader("Allow", ["GET"]);
                            res.status(405).end(`Method ${method} Not Allowed`);
            }
    }
