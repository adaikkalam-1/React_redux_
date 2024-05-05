// import React, { useState } from "react";
// import img1 from "../../assets/img1.jpg";
// import img2 from "../../assets/img2.jpg";
// import img3 from "../../assets/img3.jpg";
// import { DragDropContext } from "react-beautiful-dnd";
// import { Droppable } from "react-beautiful-dnd";
// import { Draggable } from "react-beautiful-dnd";
// const Drag = () => {
//   const [data,setData] =useState( [
//     {
//       id: 0,
//       name: "Img0",
//       description:
//         "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga ojdio, ex rere vel molestias molestiae ea odit.",
//       image: img3,
//     },
//     {
//       id: 1,
//       name: "Img1",
//       description:
//         "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
//       image: img1,
//     },
//     {
//       id: 2,
//       name: "Img2",
//       description: "welcome to all ",
//       image: img2,
//     },
//     {
//       id: 3,
//       name: "Img3",
//       description:
//         "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
//       image: img3,
//     },
//     {
//       id: 4,
//       name: "Img4",
//       description:
//         "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
//       image: img3,
//     },
//     {
//       id: 5,
//       name: "Img5",
//       description:
//         "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
//       image: img3,
//     },
//   ])


//   function OnDragEnd(result) {
//     console.log(result.destination)
//     if (!result.destination) return;
//     const items = Array.from(data);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     console.log(items)
//     setData(items);

//   }



//     return (
//       <div>
//         <DragDropContext onDragEnd={OnDragEnd}>
//           <Droppable droppableId="a1"  direction="horizontal" >
//             {(provided) => (
//               <div
//                 className="card"
//                 {...provided.droppableProps} ref={provided.innerRef}
//               >
//                 {data.map((item, index) => (
//                   <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
//                     {(provided) => (
//                       <div
//                         className="card_container"
//                        ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
//                       >
//                         <img src={item.image} />
//                         <div className="card_content">
//                           <h4>{item.name}</h4>
//                           <p>{item.description}</p>
//                         </div>
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div>
//     );
//   };
// export default Drag;
import React, { useState } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

const Drag = () => {
  const [data, setData] = useState([
    {
      id: 0,
      name: "Img0",
      description:
        "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga ojdio, ex rere vel molestias molestiae ea odit.",
      image: img3,
    },
    {
      id: 1,
      name: "Img1",
      description:
        "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
      image: img1,
    },
    {
      id: 2,
      name: "Img2",
      description: "welcome to all ",
      image: img2,
    },
    {
      id: 3,
      name: "Img3",
      description:
        "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
      image: img3,
    },
    {
      id: 4,
      name: "Img4",
      description:
        "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
      image: img3,
    },
    {
      id: 5,
      name: "Img5",
      description:
        "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
      image: img3,
    },
    {
      id: 6,
      name: "Img6",
      description:
        "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
      image: img3,
    },
    {
      id: 7,
      name: "Img7",
      description:
        "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
      image: img3,
    },
    {
      id: 8,
      name: "Img8",
      description:
        "c ipsum, dolor sit amet consectetur adipisicing elit. Temporibus fuga odio, ex rere vel molestias molestiae ea odit.",
      image: img3,
    },
  ]);

  function onDragEnd(result) {
    console.log(result.destination);
    if (!result.destination) return;
    // const items = Array.from(data);
    const [reorderedItem] = data.splice(result.source.index, 1);
    data.splice(result.destination.index, 0, reorderedItem);
    console.log(data)
    setData(data);
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="vertical" direction="vertical">
          {(provided) => (
            <div
              className="card"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ display: "flex", flexDirection: "column" }}
            >
                <Droppable droppableId="horizontal" direction="horizontal">
                {(provided) => (
                  <div
                    className="card"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {data.map((item, index) => (
                      <Draggable
                        draggableId={item.id.toString()}
                        key={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="card_container"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              margin: "0 0 8px 0",
                              ...provided.draggableProps.style,
                            }}
                          >
                            <img src={item.image} alt={item.name} />
                            <div className="card_content">
                              <h4>{item.name}</h4>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Drag;
