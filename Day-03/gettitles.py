from bs4 import BeautifulSoup
import docx
from docx import Document
import requests

def remove_hyperlink(para):
    label_r = para.xpath("./w:hyperlink/w:r")[0]
    hyperlink = para.xpath("./w:hyperlink")[0]
    hyperlink.add_previous(label_r)
    para.remove(hyperlink)

def gettext(fileloc):
    finalText = []
    doc = Document(fileloc)
    for line in doc.paragraphs:
        remove_hyperlink(line)
        if(line.text !=''):
            finalText.append(line.text)
    return finalText

def add_hyperlink(para, text, url):
    part = para.part
    r_id = part.relate_to(url, docx.opc.constants.RELATIONSHIP_TYPE.HYPERLINK, is_external = True)

    hyperlink = docx.oxml.shared.OxmlElement('w:hyperlink')
    hyperlink.set(docx.oxml.shared.qn("r:id"),r_id)

    new_run = docx.oxml.shared.OxmlElement('w:r')
    rpr = docx.oxml.shared.OxmlElement('w:rpr')

    new_run.append(rpr)
    new_run.text = text
    hyperlink.append(new_run)

    c = docx.oxml.shared.OxmlElement('w:color')
    c.set(docx.oxml.shared.qn('w:val'), "0000FF")
    rpr.append(c)

    para._p.append(hyperlink)

    return hyperlink

def get_h1(url):
    response = requests.get(url,timeout = 5)
    content = BeautifulSoup(response.content,"html.parser")
    Headlist = content.find('h1')
    return Headlist
# print(docText)
# for i in docText:
#     print(JSON.stringify(i))
docText = gettext('Test.docx')
print(docText)
newdoc = Document()
newdoc.add_heading('The Formatted Links List', level = 0)
for i in docText:
    h1 = get_h1(i)
    para = newdoc.add_paragraph('Header is ')
    add_hyperlink(para,'here',i)

newdoc.save('savetest.docx')