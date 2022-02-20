# NOTE

## Caution:

- Mọi components trong react native đều có thuộc tính mặc định là d-flex, flex-direction:column
- Position mặc định là relative

## SafeAreaView Component:

- SafeAreaView trong React Native là 1 Component tương tự View, nhưng nó cho phép render nội dung trong 1 vùng an toàn của thiết bị (áp dụng với iOS version 11 trở lên).
- Với hệ điều hành iOS thì sẽ không áp dụng các thuộc tính padding cho SafeAreaView được, còn trên Android thì áp dụng được vì chỉ như View thông thường.
- Trên Android nếu sử dụng Expo để tạo project thì có thể sử dụng thêm đối tượng Constants từ "expo-constants" (có sẵn khi tạo project) để lấy khoảng cách thanh trạng thái bên trên và dùng padding để tránh nội dung bị chèn ra khỏi vùng an toàn.

## Một số Component có thể dùng để tạo nút bấm trong React Native:

- Button: Hiển thị nút 1 cách nhanh nhất, nhưng không style theo ý thích được mà nó sẽ hiển thị tùy theo phong cách của platform (Android hay iOS)
- Pressable (phiên bản 0.63 trở lên): Điều khiển được nhiều trạng thái tương tác với người dùng nhưng không có style mặc định.
- TouchableHighlight: Tạo ra 1 nút có hiệu ứng khi nhấn vào thì phần bị nhấn sẽ mờ đi và nhìn thấy màu nền lót đằng sau (underlay color). Nếu không thiết lập underlay color sẽ thấy vùng bị bấm tối đi.
- TouchableOpacity: Tạo ra 1 nút có hiệu ứng khi nhấn vào thì phần bị nhấn sẽ mờ đi và nhìn xuyên qua màu nền đằng sau. Thường tạo cảm giác nút sáng hơn (mờ hơn).
- TouchableNativeFeedback (chỉ dành cho Android): Tạo ra 1 nút có hiệu ứng tỏa sóng (ripple) khi nhấn vào.
- TouchableWithoutFeedback: Tạo ra 1 nút mà không có hiệu ứng gì. Có thể dùng Component mới là Pressable ở trên để thay thế.

## Sử dụng icon với expo

- Expo Icon: docs[https://docs.expo.io/guides/icons]
