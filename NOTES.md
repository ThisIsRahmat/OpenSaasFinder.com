
export const  getServerSideProps = (async (context) => {
    //Auth

    const auth = await google.auth.getCloent({scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']})
    const sheets = google.sheets({ version: 'v4', auth });

// Query


  const { id } = query;
    const range = `Sheet1!A${id}:C${id}`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });

     // Result

 const [name, logo, github, description,] = response.data.values[0];
    // console.log(title, content)

    return { props: {saas} }
}