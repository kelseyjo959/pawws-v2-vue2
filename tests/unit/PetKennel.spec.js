import { mount } from "@vue/test-utils";
import PetKennel from "@/views/PetKennel.vue";
import { existsSync } from "fs";

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({ data: [{ name: "Sloppy" }, { name: "Floppy" }] })
  )
}));

const mockStore = { dispatch: jest.fn()};

describe("PetKennel", () => {
  it("calls axios GET, updates the data object with results, results are propagated to Child", done => {
    const wrapper = mount(PetKennel, {
      mocks: {
        $store: {
          // state: { 
          //   pets: [
          //     {name: "Sloppy"},
          //     {name: "Floppy"}
          //   ]
          // }
          mockStore
        }
      }
    });

    wrapper.vm.$mount();
    wrapper.vm.$nextTick(() => {

      expect(mockStore.dispatch).toHaveBeenCalledWith("getPets");
      expect(wrapper.html()).toMatch(/Sloppy/, /Floppy/);
      done();
    });
    done();
  });
});
