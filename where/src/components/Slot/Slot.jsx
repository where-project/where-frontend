import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import icon2 from '../../images/icons/icon-09.jpg'

const Slot = ({ pricingList, setPricetingList, ...props }) => {

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(pricingList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPricetingList(items);
    console.log(pricingList);
  }

  const handleRemove = (index) => {
    setPricetingList(pricingList.filter((item, i) => item.id !== index));
    console.log(pricingList);

  }

  return (
    <fieldset className='listing'>
      <div className="boxtitle">
        <h3>Pricing</h3>
      </div>
      <div className="row">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="pricingList">
            {(provided) => (
              <ul className="sortable" {...provided.droppableProps} ref={provided.innerRef}>
                {pricingList?.map(({ id, title, description, price }, index) => {
                  return (
                    <Draggable key={id} draggableId={id.toString()} index={index}>
                      {(provided) => (
                        <li className="slot" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <span className="arangeslot"><img src={icon2} alt="image description" /></span>
                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                            <div className="form-group dashboardfield">
                              <label>Title</label>
                              <input type="text" name="title" className="form-control" placeholder="Title" value={title} />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5 float_left">
                            <div className="form-group dashboardfield">
                              <label>Desctiption</label>
                              <input type="text" name="description" className="form-control" placeholder="Desctiption" value={description} />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 float_left">
                            <div className="form-group dashboardfield">
                              <label>Price</label>
                              <div className="inputwithicon">
                                <span>USD</span>
                                <input type="text" name="price" className="form-control" placeholder="Price" value={price} />
                              </div>
                            </div>
                          </div>
                          <span className="btndelete" onClick={() => handleRemove(id)}><i className="icon-icons88"></i></span>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )
            }
          </Droppable>
        </DragDropContext>
      </div>
    </fieldset>
  )
}

export default Slot