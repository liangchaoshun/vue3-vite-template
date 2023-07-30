import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', { 'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'] }],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: { '@': '/src' },
  },
  css: {
    // 指定传递给 CSS 预处理器的选项。文件扩展名用作选项的键
    // 注意：生效条件（满足一个即可）：
    //  1. 某个文件中引入了其他 sass/scss 文件；
    //  2. 某个 vue 组件中用了 style 标签：<style lang="scss"></style>，并且标签中不为空必须存在样式。
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/common.scss";`, // 支持引入多个文件（ ; 号分隔）
      },
    },
  },
})
