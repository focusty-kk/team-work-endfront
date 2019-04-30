interface IanyObject {
  [propName: string]: any
}

type stringOrNull = string | null


interface IDto<T extends boolean> {
  jylsh: string
  msgCode: stringOrNull
  msgParams: stringOrNull
  resultMap: IanyObject
  message: string
  success: T
  value: any
}

class DtoObj {

  constructor(message?: string) {
    this.message = message
  }

  public message: string;
  private successDtoObject = DtoObj.toDtoObject(true, this.message) as IDto<true>;
  private falseDtoObject = DtoObj.toDtoObject(false, this.message) as IDto<false>;

  public successDto(val: any, message?: string) {
    this.successDtoObject.value = val;
    this.successDtoObject.message = message || "返回success";
    return this.successDtoObject
  }

  public falseDto(val: any, message?: string) {
    this.falseDtoObject.value = val;
    this.falseDtoObject.message = message || "返回false";
    return this.falseDtoObject
  }

  private static toDtoObject(bool: boolean, message: string) {
    return {
      jylsh: '',
      msgCode: '',
      msgParams: null,
      resultMap: {},
      message: message,
      success: bool,
      value: ''
    }
  }
}

export const dtoUtil = (message?: string) => {
  const Dto: DtoObj = new DtoObj(message);
  return Dto
};

