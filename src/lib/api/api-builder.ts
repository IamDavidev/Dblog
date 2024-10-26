export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export class ApiBuilder<T> {
  private method: HttpMethod = HttpMethod.GET
  private baseUrl = ''
  private headers: Record<string, string> = {}
  private body: T | null = null

  setMethod(method: HttpMethod): ApiBuilder<T> {
    this.method = method
    return this
  }

  setBody(body: T): ApiBuilder<T> {
    this.body = body
    return this
  }

  setBaseUrl(baseUrl: string): ApiBuilder<T> {
    this.baseUrl = baseUrl
    return this
  }

  setHeaders(headers: Record<string, string>): ApiBuilder<T> {
    this.headers = headers
    return this
  }

  async send(): Promise<Response> {
    this.assertConfigIsValid()

    const headers = new Headers(this.headers)
    const request = new Request(this.baseUrl, {
      method: this.method,
      headers,
      body: this.body ? JSON.stringify(this.body) : undefined
    })

    return await fetch(request)
  }

  assertConfigIsValid(): void {
    if (!this.baseUrl) throw new Error('Base URL is required')

    if (this.method === HttpMethod.GET && this.body)
      throw new Error('GET request should not have a body')
  }
}
