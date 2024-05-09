export const checkSmileFaceProblem = (arr: string[]): number => {
  const validEye = [':', ';'];
  const validNose = ['-', '~'];
  const validMouth = [')', 'D'];
  console.log(arr);
  const count = arr.filter((face) => {
    const faceArr = face.split('');
    if (faceArr.length < 2 || faceArr.length > 3) return false;
    const isEyePass = validEye.includes(faceArr[0]);
    const isNosePass = validNose.includes(faceArr[1]);
    const isMouthPass = validMouth.includes(faceArr[faceArr.length - 1]);
    console.log(isMouthPass);
    return (
      (isEyePass && isNosePass && isMouthPass) || (isEyePass && isMouthPass)
    );
  });
  console.log(count);
  return count.length;
};
