<template>
  <div class="Test-one">
    <el-row class="box1"> <!-- DialogBox -->

      <el-dialog :visible.sync="dialogForm" :before-close="resetEvent"> 
        <el-row :gutter="20" type="flex" justify="space-around"> <!-- Progress -->

            <el-col :span="12"><div class="score grid-content">
                <h1>Label A</h1>
                  <el-progress :text-inside="true" :stroke-width="24" :percentage="labelAstatus" :color="colorProgressLabelA"></el-progress>
              </div></el-col>
            <el-col :span="12"><div class="score grid-content">
                <h1>Label B</h1>
                  <el-progress :text-inside="true" :stroke-width="24" :percentage="labelBstatus" :color="colorProgressLabelB"></el-progress>
              </div></el-col>

        </el-row>
        <el-row :gutter="20" type="flex" justify="space-around"> <!-- Buttons -->
        
            <el-col :span="4"><div class="grid-content"><el-button @click="decreaseLabelA" type="default">Decrease Label A</el-button></div></el-col>
            <el-col :span="4"><div class="grid-content"><el-button @click="decreaseLabelB" type="default">Decrease Label B</el-button></div></el-col>
            <el-col :span="4"><div class="grid-content"><el-button @click="resetEvent" type="danger">Reset</el-button></div></el-col>

        </el-row>
    
      </el-dialog>
      <el-col :span="24"><div class="grid-content"><el-button @click="startEvent" type="success">Start</el-button></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'testOne',
  props: {
    msg: String
  },
  data (){
    return {
      labelAstatus:100,
      labelBstatus:100,
      running: 0, // Show(true) or hide(false) buttons on template
      dialogForm: 0, // DialogBox on "Start" button
    }
  },
  computed:{
  },
  methods: {
    // Start event showing buttons on hiden template
      resetEvent() {
        this.dialogForm = 0 // Close DialogBox
        this.labelAstatus = 100
        this.labelBstatus = 100
        this.$message({
          message: 'Label successfully reseted!',
          type: 'success'
        })
      },  
      startEvent() {
        this.dialogForm = 1 // Open DialogBox
      },
      decreaseLabelA() {
        this.labelAstatus -= 10
        if(this.labelAstatus == 0){
          this.$message.error('Label A is 0');
        }
      },
      decreaseLabelB() {
        this.labelBstatus -= 10
         if(this.labelBstatus == 0){
          this.$message.error('Label B is 0');
        }
      },
      colorProgressLabelA(labelAstatus) {
        if (labelAstatus < 30) {
          return '#f56c6c';
        }
        else{
          return '#67c23a';
        }
      },
      colorProgressLabelB(labelBstatus) {
        if (labelBstatus < 30) {
          return '#f56c6c';
        }
        else{
          return '#67c23a';
        }
      },
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .box1 {
    /* width: 50%;
    height: 25%;
    position: relative;
    align-content: center;
    text-align: center;
    left: 25%;
    top: 25%; */
    
    border-radius: 15px;
  }

  .score {
    padding: 15px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
 .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>
