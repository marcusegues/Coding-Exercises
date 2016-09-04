class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
  end

  def create
    book = Book.new(book_params)
    if book && book.save
      redirect_to books_url
    else
      render :new
    end
  end

  def destroy
    book = Book.find_by(id: params[:id])
    if book
      book.destroy
      redirect_to books_url
    else
      render json: "Did not find the book"
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
