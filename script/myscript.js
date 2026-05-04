const windows = document.querySelectorAll('.window');

windows.forEach((draggable) => {
  draggable.translateX = 0;
  draggable.translateY = 0;
  draggable.addEventListener('mousedown', (e) => {
    currentDraggable = draggable;
    offsetX = e.clientX - draggable.translateX;
    offsetY = e.clientY - draggable.translateY;
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  });
});

function drag(e) {
  if (currentDraggable) {
    currentDraggable.translateX = e.clientX - offsetX;
    currentDraggable.translateY = e.clientY - offsetY;
    currentDraggable.style.transform = `translate(${currentDraggable.translateX}px, ${currentDraggable.translateY}px)`;
  }
}

function stopDrag() {
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
  currentDraggable = null;
}