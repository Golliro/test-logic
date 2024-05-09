import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "../src/app.controller";
import { AppService } from "../src/app.service";
import { StringSufflingsDto } from "../src/app.dto";

describe("AppController", () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  // describe("getHello", () => {
  //   it('should return "Hello World!"', () => {
  //     const result = "Hello World!";
  //     jest.spyOn(appService, "getHello").mockImplementation(() => result);

  //     expect(appController.getHello()).toBe(result);
  //   });
  // });

  describe("stringSufflings", () => {
    it("should return an array of suffled strings", () => {
      const dto: StringSufflingsDto = { input_string: "ab" };
      const result = ["ab", "ba"];
      jest
        .spyOn(appService, "stringSufflings")
        .mockImplementation(() => result);

      expect(appController.stringSufflings(dto)).toBe(result);
    });
  });

  describe("intOddAppear", () => {
    it("should return an array of odd appearing integers", () => {
      const arr = [1, 2, 2, 3, 3, 3];
      const result = 1;
      jest.spyOn(appService, "intOddAppear").mockImplementation(() => result);

      expect(appController.intOddAppear(arr)).toBe(result);
    });
  });

  describe("checkSmileFace", () => {
    it("should return an array of boolean values", () => {
      const arr = [":)", ":(", ":D", ":O"];
      const result = 2;
      jest.spyOn(appService, "checkSmileFace").mockImplementation(() => result);

      expect(appController.checkSmileFace(arr)).toBe(result);
    });
  });
});
