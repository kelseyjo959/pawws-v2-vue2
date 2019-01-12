import { mount, shallowMount } from '@vue/test-utils';
import axios from 'axios';
import PetKennel from '@/views/PetKennel.vue';
import Vue from 'vue'

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: [{name: "Sloppy"}, {name: "Floppy"}] }))
}));

describe("PetKennel", () => {
  it("calls axios GET", (done) => {
    const wrapper = mount(PetKennel, {
      data () {
        return {
          pets: []
        }
      }
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
      done()
    });
    console.log(wrapper.vm.pets)

    done();

    // expect(axios.get).toBeCalledWith('http://localhost:3000/getPets', { 
    //   headers: {
    //   "screenSize": window.width,
    //   "shelter": "",
    //   "count": 0,
    //   }
    // });

    // wrapper.setData([{ name: "Camel" }]);

    // console.log(wrapper.vm.pets)
    // expect(wrapper.vm.$data).toMatchObject({pets: []});
  });
});