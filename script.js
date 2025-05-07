
function addTaco(){
    const tacoRef = ref(db, 'tacoCount');
    runTransaction(tacoRef, (currentCount) => {
        return (currentCount || 0) +1;
    })
    
}
function Butt(){
    addTaco();
    console.log("Taco Added!");
}