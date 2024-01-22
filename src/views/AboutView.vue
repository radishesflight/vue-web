<style>
.layout-base {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  color: white;
  text-align: center;
  overflow: hidden;
}

.layout-base {
  margin-bottom: 20px;
}

.layout-header {
  background: #3A9FE8;
  color: white;
  height: 100px;
}

.layout-header div {
  height: 100%;
  line-height: 100px;
  text-align: center;
}

.layout-footer {
  background: #7CBCE9;
  color: white;
}

.layout-content {
  background: #0F8DE9;
  min-height: 120px;
  line-height: 120px;
}

.layout-sider {
  background: #3A9FE8;
  min-height: 120px;
  line-height: 120px;
}

.layout iframe {
  width: 100%;
  border: 0;
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width .2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div class="layout-base">
    <Layout>
      <Header class="layout-header">
        <Row>
          <Col span="8">
            <div>
              <img src="@/assets/yh-logo2.273bd23c.png"  style="padding:20px;height: 100%" alt="">
            </div>
          </Col>
          <Col span="8">
            <div>
              dsf
            </div>
          </Col>
          <Col span="8">
            <div>
              dsf
            </div>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Content class="layout-content">Content</Content>
        <Sider class="layout-sider" hide-trigger>Sider</Sider>
      </Layout>
      <Footer class="layout-footer">Footer</Footer>
    </Layout>
  </div>
</template>
<script>
export default {}
</script>
