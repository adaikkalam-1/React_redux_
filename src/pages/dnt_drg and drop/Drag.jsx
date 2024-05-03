import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const App = () => {
  const data1 = [
    {
      id:0,
      name: "Img1",
      description: "welcome to all",
      img: "https://picsum.photos/200/300",
    },
    {
      id:1,
      name: "Img2",
      description: "welcome to all",
      img: "https://picsum.photos/200/300",
    },
    {
      id:2,
      name: "Img2",
      description: "welcome to all",
      img: "https://picsum.photos/200/300",
    },
    {
      id:3,
      name: "Img2",
      description: "welcome to all",
      img: "https://picsum.photos/200/300",
    },
    {
      id:4,
      name: "Img2",
      description: "welcome to all",
      img: "https://picsum.photos/200/300",
    },
    {
      id:5,
      name: "Img2",
      description: "welcome to all",
      img: "https://picsum.photos/200/30",
    },
    {
      id:6,
      name: "Img2",
      description: "welcome to all",
      img: "https://picsum.photos/200/300",
    },
    {
      id:7,
      name: "Img2",
      description: "welcome to all",
      img: "https://picsum.photos/200/300",
    },
  ];
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="Card2">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="card"
            >
              {data1.map((data, index) => (
                <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                  {(provided)=>(
                        <div ref={provided.innerRef}{...provided.draggableProps} {...provided.dragHandleProps} className="card_container" >
                        <img src={data.img} />
                        <div className="card_content">
                          <h4>{data.name}</h4>
                          <p>{data.description}</p>
                        </div>
                        <a className="btn2" href="#">
                          Edit
                        </a>
                      </div>
                 
                  )}
                  </Draggable>
              ))}
            
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;
