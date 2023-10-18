<!--    startDrag(e) {-->
<!--      const dragWidth = dragElement.offsetWidth-->
<!--      const xPosition =-->
<!--        dragElement.getBoundingClientRect().left + dragWidth - this.getPageX(e)-->
<!--      const containerOffset = container.getBoundingClientRect().left-->
<!--      const containerWidth = container.offsetWidth-->
<!--      const minLeft = containerOffset + 10-->
<!--      const maxLeft = containerOffset + containerWidth - dragWidth - 10-->

<!--      document.addEventListener('mousemove', this.drag)-->
<!--      document.addEventListener('touchmove', this.drag)-->
<!--      document.addEventListener('mouseup', this.stopDrag)-->
<!--      document.addEventListener('touchend', this.stopDrag)-->

<!--      let leftValue, widthValue-->

<!--      const vm = this-->
<!--      drag(e) {-->
<!--        leftValue = vm.getPageX(e) + xPosition - dragWidth-->

<!--        if (leftValue < minLeft) {-->
<!--          leftValue = minLeft-->
<!--        } else if (leftValue > maxLeft) {-->
<!--          leftValue = maxLeft-->
<!--        }-->

<!--        widthValue =-->
<!--          ((leftValue + dragWidth / 2 - containerOffset) * 100) /-->
<!--            containerWidth +-->
<!--          '%'-->

<!--        dragElement.style.left = widthValue-->
<!--        resizeElement.style.width = widthValue-->
<!--      }-->

<!--      stopDrag() {-->
<!--        dragElement.classList.remove('draggable')-->
<!--        resizeElement.classList.remove('resizable')-->

<!--        document.removeEventListener('mousemove', drag)-->
<!--        document.removeEventListener('touchmove', drag)-->
<!--        document.removeEventListener('mouseup', stopDrag)-->
<!--        document.removeEventListener('touchend', stopDrag)-->
<!--      }-->

<!--      e.preventDefault()-->
<!--    },-->
<!--    getPageX(e) {-->
<!--      if (e.type === 'touchstart' || e.type === 'touchmove') {-->
<!--        return e.touches[0].pageX-->
<!--      } else {-->
<!--        return e.pageX-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--}-->
<!--</script>-->
