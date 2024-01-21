<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </div>
  </div>
</template>
<script>
import { Button, Table } from 'view-ui-plus';
export default {
  mounted() {
    this.axios.get('/goods/ad/byPage?clientType=0&pageName=login')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  },
  components:{
    Button,
    Table
  },
  created() {
    // this.axios.get('/goods/ad/byPage?clientType=0&pageName=login')
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
  }
}
</script>
