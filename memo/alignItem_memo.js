const Component = ({}) => (); // 箭頭右方為小括
<View>{mapHere}</View> // {} 可帶變數,函式也須看作變數,用大括包

// .map
propsKey.map((item)=>()); // map 的箭頭右方為小括

// .map 要加入保留字「key」
{propsKeys.map((item) => (
  <TouchableOpacity
    key={item}
  />
))}
// end

// 屬性用作變數時, 以中括打包使用
style={[{text: "center"}]}
vvv
const  myProperty = "text";
style={[{[myProperty]: "center"}]}
// end

alignItems (o)
alignItem  (x) // 應有「s」

// Components 中, setState 時不應加變數
(X)
<Component
  propsFn={setAlignItems(alignItems)}
></Component>

(O)
<Component
  propsFn={setAlignItems(alignItems)}
></Component>
// end

// 正常的 setStatus 寫法
const [vv, setVv] = useState("def vv");
<TouchableOpacity onPress={() => setVv(1)}>
  <Text>11111111</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => setVv(2)}>
  <Text>22222222</Text>
</TouchableOpacity>
<Text>{vv}</Text>


// onPress 沒有「陣列執行多個」這方法
onPress={[() => propsFn(item)]} //xxx

// 條件式加 css
// 當 item 變數 === propsKey 變數時，就給(&&) cssLabelOn 樣式
style={[styles.cssLabel, propsKey === item && styles.cssLabelOn]}