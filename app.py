from flask import Flask,render_template

app = Flask(__name__, static_url_path="/")

vol_list = ["0","1"]
en_list = ["0"]

# トップページ
@app.route("/",methods = ["GET"])
def index():
    return render_template("index.html")

# 英語版
@app.route("/en/",methods = ["GET"])
def index_en():
    return render_template("index_en.html")

#「/vol/<num>」へアクセスがあった場合に、「article<vol>.html」を返す
@app.route("/vol/<num>/",methods = ["GET"])
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

#「/vol/<num>/en」へアクセスがあった場合に、「article<vol>_en.html」を返す。英語版
@app.route("/vol/<num>/en/",methods = ["GET"])
def vol_en(num):
    for i in range(0,len(en_list)):
        if en_list[i] == num:
            break
        else:
            if i == len(en_list)-1:
                nf404 = True
                return render_template("404.html",nf404 = nf404),404
            else:
                break
    return render_template("article"+num+"_en.html")


@app.errorhandler(404) # 404エラーが発生した場合の処理
def error_404(error):
    nf404 = True
    return render_template('404.html',nf404 = nf404)

if __name__ == "__main__":
    app.debug = False
    app.run(port="4000", host="localhost")