import { mount, shallowMount } from '@vue/test-utils';
import axios from 'axios';
import PetKennel from '@/views/PetKennel.vue';

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: [{name: "Sloppy"}, {name: "Floppy"}] }))
}));

describe("PetKennel", () => {
  it("calls axios GET and updates the data object with GET results", (done) => {
    const wrapper = mount(PetKennel, {
      data () {
        return {
          pets: []
        }
      },
    });

    wrapper.find('button').trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(axios.get).toBeCalledWith('http://localhost:3000/getPets', { 
        headers: {
          "screenSize": window.width,
          "shelter": "",
          "count": 0,
        }
      });

      expect(wrapper.vm.pets).toEqual([{name: "Sloppy"}, {name: "Floppy"}]);
      console.log(wrapper.html());
      expect(wrapper.html()).toMatch(/Sloppy/, /Floppy/);
      done();

    });
    done();
  });
});