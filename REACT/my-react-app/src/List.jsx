function List()
{
    const Fruits = ["apple" , "orange" , "banana" , "pineapple"];
    
    const list = Fruits.map(fruit => <li>{fruit}</li>)

    return(<ol>{list}</ol>)
}

export default List