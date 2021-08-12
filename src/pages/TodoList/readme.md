Luồng đi của redux thunk như sau:

- Thường được xử lý cho các nghiệp vụ liên quan bất đồng bộ
- ở trường hợp này mình dùng để lấy ra 1 list task
--> đầu game mình sẽ dispatch tới action-> sau đó action xử lý logic xong xuôi(call API đến khi nào lấy được kết quả thì thôi)->rồi mới dispatch tới reducer. giao diện của mình chỉ sử dụng state từ reducer 

Túm lại: dispatch action -> action (xử lý logic, xong dispatch reducer)