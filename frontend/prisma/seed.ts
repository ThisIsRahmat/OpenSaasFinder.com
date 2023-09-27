import { PrismaClient } from '@prisma/client'
import { OpenSaas } from '../assets./data.csv'

const prisma = new PrismaClient()

type OpenSaas = {
    name: string;
    description: string;
    website: string;
    github: string;
  };

  (() => {
    const csvFilePath = path.resolve(__dirname, 'assets/data.csv');
    
    const headers = ['name', 'description', 'website', 'github'];
    
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    
    parse(fileContent, {
      delimiter: ',',
      columns: headers,
    }, (error, result: OpenSaas[]) => {
      if (error) {
        console.error(error);
      }
      console.log("Result", result);
    });
  })();

const load =async () => {
    try {
        await prisma.OpenSaas.createMany({
            data: OpenSaas
          })
          console.log('Added OpenSaas data to the database')
    } catch (e) {
        console.error(e)
        process.exit(1)

    } finally {
        await prisma.$disconnect()
    }
}


// async function  main() {


//     await prisma.user.upsert({

//     })

//    console.log()
// }

// main()
// .then(async  () => {
//     await prisma.$disconnect()
// })
// .catch(async(e) => {
//     console.error(e)
//  await prisma.$disconnect()
//  process.exit(1)
// })
