
export default function Product(props){
    const price=90;
    return (
        <>
        <h2>{props.name}</h2>
        <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="640" />
        <p>Price: {price} credits</p>
        </>
    );
};