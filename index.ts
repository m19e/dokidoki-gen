import { writeFileSync } from "fs";

const kanalist = [
    // "ぁ",
    "あ",
    // "ぃ",
    "い",
    // "ぅ",
    "う",
    // "ぇ",
    "え",
    // "ぉ",
    "お",
    "か",
    "が",
    "き",
    "ぎ",
    "く",
    "ぐ",
    "け",
    "げ",
    "こ",
    "ご",
    "さ",
    "ざ",
    "し",
    "じ",
    "す",
    "ず",
    "せ",
    "ぜ",
    "そ",
    "ぞ",
    "た",
    "だ",
    "ち",
    "ぢ",
    // "っ",
    "つ",
    "づ",
    "て",
    "で",
    "と",
    "ど",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ば",
    "ぱ",
    "ひ",
    "び",
    "ぴ",
    "ふ",
    "ぶ",
    "ぷ",
    "へ",
    "べ",
    "ぺ",
    "ほ",
    "ぼ",
    "ぽ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    // "ゃ",
    "や",
    // "ゅ",
    "ゆ",
    // "ょ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    // "ゎ",
    "わ",
    "ゐ",
    "ゑ",
    "を",
    "ん",
];

const main = async () => {
    const result = kanalist
        .map((first, fi) => {
            const inner = kanalist
                .filter((_, i) => i !== fi)
                .map((second) => {
                    const text = `${first}ー${second}` + (first + second).repeat(7);
                    return text;
                })
                .join("\n");
            return inner;
        })
        .join("\n");

    try {
        writeFileSync("output/dokidoki.txt", result);
    } catch (e) {
        console.error(e);
    }
};

main();
