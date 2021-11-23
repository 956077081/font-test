<template>
  <div style="width: 300px ;display: flex; flex-direction: row ">
    <div v-if="name != ''  "><p style="font-size: 14px;font-weight: bolder">{{name}}&nbsp;&nbsp;:&nbsp;</p></div>
    <div style="width: 200px">
      <template v-if="type =='radio'">
        <RadioGroup v-model="currValue">
          <Radio v-for="dict in dictArr"
                 :key="dict.dictId"
                 :label="dict.dictId">
            {{ dict.dictName }}
          </Radio>
        </RadioGroup>
      </template>
      <template v-if="type =='checkbox'">
        <CheckboxGroup v-model="currValue">
          <Checkbox
            v-for="dict in dictArr"
            :key="dict.dictId"
            :label="dict.dictId"
          >
            {{ dict.dictName }}
          </Checkbox>
        </CheckboxGroup>
      </template>
      <template v-if="type =='select'">
        <Select v-model="currValue">
          <Option
            v-for="dict in dictArr"
            :key="dict.dictId"
            :value="dict.dictId">
            {{ dict.dictName }}
          </Option>
        </Select>
      </template>
    </div>
  </div>
</template>

<script>
  import {getdictList} from "../../assets/js/dict";

  export default {
    name: "dict-element",
    props: {
      name: {
        type: String,
        default: ""
      },
      value: [String, Array],
      dictType: [String, Array],
      type: String,

    },
    data() {
      return {
        dictArr: []
      }
    },
    created() {
      console.log(this.dictType)
      getdictList(this.dictType).then(res => {
        this.dictArr = res[this.dictType]
      });
      console.log(this.dictArr)

    },
    computed: {
      currValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit("input", val);
        }
      }
    }
  }
</script>

<style scoped>

</style>
