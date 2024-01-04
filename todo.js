let userInput = prompt('what do you want to do');
const todo =['WASH CAR','BUY LAPTOP','LEARN TO CODE'];


while(userInput !== 'quit' && userInput !== 'q'){


    if(userInput === 'list'){
        console.log('*********');
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i].toUpperCase()}`);
        }
        console.log('*********');
    }else if(userInput === 'new'){
        userInput = prompt('create a new todo');

         todo.push(userInput);
         console.log(`${userInput.toUpperCase()} added to the list`);
    }
    else if(userInput === 'delete'){
       userInput = prompt('what task do you want to delete?');
       let removed = todo.splice(userInput,1);
        
        console.log(`${removed} Succesfully Deleted!`);
    }

    userInput = prompt('what do you want to do?');
}
console.log('you quit the app!'.toUpperCase());