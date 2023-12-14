declare module "open-location-code" {
  export default class OpenLocationCode {
    static encode(
      latitude: number,
      longitude: number,
      codeLength?: number
    ): string;
    static decode(code: string): {
      latitudeCenter: number;
      longitudeCenter: number;
    };
  }
}
