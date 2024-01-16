
function countnndSay(n)
{
  // Base cases
  if (n == 1) return "1";
  if (n == 2) return "11";

  let str = "11";

  for (let i = 3; i <= n; i++) {
    str += "$";
    let len = str.length;

    let cnt = 1;

    let tmp = "";
    let arr = str.split("");

    for (let j = 1; j < len; j++) {
      if (arr[j] != arr[j - 1]) {
        tmp += cnt + 0;

        tmp += arr[j - 1];

        cnt = 1;
      } else cnt++;
    }

    str = tmp;
  }
  return str;
}

for(let i = 1; i <= 15; i++)
    document.write(countnndSay(i) + "<br>");
