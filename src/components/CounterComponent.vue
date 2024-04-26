
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button id="button-add" @click="count++">Add 1 to count</button>
    <button id="button-remove" @click="count--">Remove 1 from count</button>
  </div>

</template>

<script>
export default {
  data(){
    return {
      count : 0
    }

  }
}

</script>

<style scoped>

button{
  background-color: darkblue;
  padding : 5px 10px;
  border : none;
  outline: none;
  margin : 5px;
  color : white;
  border-radius : 5px;
  cursor: pointer;
}

button:hover{
  background-color: midnightblue;
}

</style>