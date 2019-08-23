<template>
  <div id="app">
    <el-card class="box-card" style="text-align:left">
      <div slot="header" class="clearfix">
        <h2>Custom Questions</h2>
        <span>You must add atleast one question to launch a survey</span>
        <el-row :gutter="20">
          <el-col :span="10">
            <h4>Question</h4>
          </el-col>
          <el-col :span="14">
            <h4>Question Settings <i class="el-icon-info"></i></h4>
          </el-col>
        </el-row>
      </div>
      <div class="card-body">
        <el-row>
          <el-col>
            <h4>What is the your name?</h4>
            <ul>
              <li>Alexander</li>
              <li>Issac Newton</li>
              <li>Nicolas Copernicus</li>
              <li>Edison</li>
            </ul>
          </el-col>
        </el-row>
        <el-divider style="background-color:#EBEEF5;"></el-divider>
        <el-row>
          <el-col>
            <h4>Where are you from?</h4>
            <ul>
              <li>Hyderabad</li>
              <li>Bangalore</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </el-col>
        </el-row>
        <el-divider style="background-color:#EBEEF5;"></el-divider>
        <el-row>
          <el-col>
            <h4>Where are you from?</h4>
            <ul>
              <li>Hyderabad</li>
              <li>Bangalore</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </el-col>
        </el-row>
        <!-- <h1><i class="el-icon-message"></i></h1>
        <h4><p>No Data</p></h4> -->
      </div>
      <el-footer class="card-footer">
        <el-row>
          <el-col span="24">
            <el-button type="info" @click="dialogVisible = true">Add a question</el-button>
          </el-col>
        </el-row>
      </el-footer>
    </el-card>

    <el-dialog title="Add a custom question" style="text-align:left;" :visible.sync="dialogVisible" width="40%">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" style="background-color:#00C3D9;border-color:#00C3D9;" @click="dialogVisible = false">Save Changes</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'Questions',
  components: {
  },
  data () {
    return {
      questions: [],
      dialogVisible: false
    }
  },
  created () {
  },
  methods: {

  }
}
</script>
<style>
  .card-body {
    min-height: 200px;
    max-height: 500px;
    overflow-y: auto;
  }
  .card-footer {
    padding: 18px 20px;
    border-top: 2px solid #DCDFE6;
  }
  .el-card__header {
    border-bottom: 2px solid #EBEEF5;
  }
</style>
