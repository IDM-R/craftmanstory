from flask import Flask,render_template

app = Flask(__name__, static_url_path="/")

vol_list = ["0"]

# トップページ
@app.route("/",methods = ["GET"])
def index():
    return render_template("index.html")

#「/index」へアクセスがあった場合に、「index.html」を返す
@app.route("/vol/<num>")
def vol0(num):
    for i in range(0,len(vol_list)):
        if vol_list[i] == num:
            break
        else:
            if i == len(vol_list)-1:
                return render_template("404.html"),404
            else:
                break
    return render_template("article"+num+".html")

@app.errorhandler(404) # 404エラーが発生した場合の処理
def error_404(error):
    return render_template('404.html')

if __name__ == "__main__":
    app.debug = False
    app.run(port="4000", host="localhost")