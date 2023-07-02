export {}
declare global {
  interface Window {
    ethereum: any
    windows: any
  }
} // ethereum или другой елемент
let ethereum = null
if (typeof window !== "undefined") {
  ethereum = window.ethereum
}
