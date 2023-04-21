import colors from 'colors';
import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [{
            value: '1',
            name: '1. Crear tarea',
        },
        {
            value: '2',
            name: '2. Listar tarea(s)',
        },
        {
            value: '3',
            name: '3. Listar pendiente(s)',
        },
        {
            value: '4',
            name: '4. Listar completada(s)',
        },
        {
            value: '5',
            name: '5. Elimiar tarea(s)',
        },
        {
            value: '0',
            name: '0. Salir',
        }
        ]
    }
];




const inquirerMenu = async() => {
    console.log('=========================='.green);
    console.log('Seleccione una opción'.green);
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(questions);
    return opcion;
}


const pausa = async(  ) =>{
    const enter = [{
        type: 'input',
        name: 'key',
        message: `Presione ${'enter'.green} para continuar`,
    }];
    console.log('\n');
    const { key } = await inquirer.prompt( enter );
    console.clear();
    return key;
}


export {
    inquirerMenu,
    pausa,
};