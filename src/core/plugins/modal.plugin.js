import { createApp, h, VueElement } from "vue";
import Modal from "@/components/Modal/ModalTest.vue";
import ShowMessage from "@/components/Modal/ShowMessage.vue";

const modalPlugin = {
  install: (app) => {
    const modalWindows = [Modal, ShowMessage]
    const openedModals = new Map;

    app.config.globalProperties.$modalShow = (name) => {
      if (openedModals.get(name)) {
        return
      }
      if (!name) {
        throw new TypeError('Modal not found')
      }

      openedModals.set(name, name)

      let dynamicComponent = null
      modalWindows.map(item => {
        if (item.name == name) {
          dynamicComponent = item
        }
      })
      
      const root = document.createElement("div");
      root.setAttribute("id", name);

      const wrapper = document.getElementById('wrapper')
      wrapper.appendChild(root)

      const renderModal = createApp({
        render: () => h(dynamicComponent, {}, name),
      });


      renderModal.config.globalProperties.$modalHide = (name) => {
        const root = document.getElementById(name);
        root.remove()
        openedModals.get(name) ? openedModals.delete(name) : null
        renderModal.unmount()
      };

      renderModal.mount(root);
    };
  },
};

export default modalPlugin;
