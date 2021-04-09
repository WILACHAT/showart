import 'react-dropzone-uploader/dist/styles.css';
import { Dropzone } from 'react-dropzone-uploader';

var MyUploader = function MyUploader() {
  // specify upload params and url for your files
  var getUploadParams = function getUploadParams(_ref) {
    var meta = _ref.meta;
    return { url: 'https://httpbin.org/post' };
  };

  // called every time a file's `status` changes
  var handleChangeStatus = function handleChangeStatus(_ref2, status) {
    var meta = _ref2.meta,
        file = _ref2.file;
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  var handleSubmit = function handleSubmit(files, allFiles) {
    console.log(files.map(function (f) {
      return f.meta;
    }));
    allFiles.forEach(function (f) {
      return f.remove();
    });
  };

  return React.createElement(Dropzone, {
    getUploadParams: getUploadParams,
    onChangeStatus: handleChangeStatus,
    onSubmit: handleSubmit,
    accept: 'image/*,audio/*,video/*' });
};