import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../../assets/scss/setting/resets.scss';
import '../../assets/scss/goal/goal03.scss';
import dragicon from '../../assets/img/goal/priority.png';

const Goal03 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [items, setItems] = useState(location.state?.goalTexts || []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const handleNextClick = () => {
    console.log("Navigating to Goal04 with state:", {
      goalText: location.state.goalText,
      sortedTexts: items,
    }); // 디버깅을 위해 로그 추가
    navigate('/goal04', { state: { goalText: location.state.goalText, sortedTexts: items } });
  };

  return (
    <div className="goal03">
      <div className="content">
        <main>
          <div className="date">2024 . 08 . 06</div>
          <div className="goal-subtext">우선순위는</div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="goals">
              {(provided) => (
                <div
                  className="goals"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {items.map((item, index) => (
                    <Draggable key={`item-${index}`} draggableId={`item-${index}`} index={index}>
                      {(provided) => (
                        <div
                          className="goal-item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <span className="priority">{index + 1}</span>
                          {item}
                          <span className="drag-handle">
                            <img src={dragicon} alt="drag icon" />
                          </span>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="goal">이다.</div>
          <div className="button-container">
            <button className="back-btn" onClick={handleBackClick}>
              Back
            </button>
            <button className="next-btn active" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Goal03;
