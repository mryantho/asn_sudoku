
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');
                var fileDisplayMessageArea = document.getElementById('fileDisplayMessageArea');
                
		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
                                        fileDisplayMessageArea.innerText = 'Your file looks like this';
                                        
                                        fileDisplayArea.innerText = reader.result;
                                        data = reader.result;
                                        var mySudouku = new Sudoku(data);
                                        
				};

				reader.readAsText(file);	
                               
			} else {
				fileDisplayArea.innerText = "File not supported!";
			}
		});
};




function Sudoku(data) {
    this.text = data;
    

}



